import { PrismaClient } from "@prisma/client";

export let db;
export let rawDb;

const extension = {
  model: {
    trackGroup: {
      async softDelete(id) {
        await db.trackGroup.update({
          data: { isDeleted: true },
          where: { id },
        });
      },
    },
  },
  query: {
    trackGroup: {
      $allOperations({ operation, args, query }) {
        if (
          [
            "findUnique",
            "findUniqueOrThrow",
            "findFirst",
            "findFirstOrThrow",
            "findMany",
          ].includes(operation)
        ) {
          args.where = { isDeleted: false, ...args.where };
        }
        return query(args);
      },
    },
  },
};

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  rawDb = new PrismaClient();
  db = rawDb.$extends(extension);
} else {
  if (!global.__rawDb) {
    global.__rawDb = process.env.LOG_PRISMA
      ? new PrismaClient({ log: ["query"] })
      : new PrismaClient();
  }

  rawDb = global.__rawDb;

  if (!global.__db) {
    global.__db = rawDb.$extends(extension);
  }

  db = global.__db;
}

export default db;
