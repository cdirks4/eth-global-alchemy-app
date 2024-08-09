# TikTok Clippers & Content Creators Connect

## Overview
**TikTok Clippers & Content Creators Connect** is a web application designed to bridge the gap between TikTok content creators and clip creators (clippers). This platform allows content creators to create bounties for specific clips they want from their content, and clip creators can browse these bounties, submit their best TikTok clips, and get rewarded for their work.

## Features
- **Wallet & TikTok Integration**: Users can securely connect their crypto wallet and TikTok account to interact with the platform.
- **Role Selection**: Users can choose whether they want to participate as a content creator or a clip creator.
- **Profile Setup**: Tailored profile creation for both content creators and clip creators.
- **Bounty Creation**: Content creators can create bounties with specific clip requirements and reward amounts.
- **Bounty Browsing & Submission**: Clip creators can browse active bounties, select those they are interested in, and submit their TikTok clips for approval.
- **Clip Approval**: Content creators can review submitted clips and approve or reject them.

## Flow

### Landing Page:
- Users are introduced to the app and prompted to connect their wallet and TikTok account.
- Users choose to proceed as either a content creator or a clip creator.

### Profile Setup:
- **Content Creators**: Redirected to `/content-profile` to set up their profile.
- **Clip Creators**: Redirected to `/clipper-profile` to set up their profile.

### Content Creator Actions:
- After setting up their profile, content creators are redirected to `/create-bounties` where they can create new bounties for the clips they need.
- They can also manage and review submissions for their bounties.

### Clip Creator Actions:
- After setting up their profile, clip creators are redirected to `/active-bounties` where they can view all active bounties.
- They can submit their TikTok clips to the bounties they are interested in.


### Bounty Details & Submission (`/bounties/[id]`):
- **Clip Creators**: Can visit a specific bounty page at `/bounties/[id]` to view details and submit their TikTok clip directly to that bounty.
- **Content Creators**: Can access the submissions for a specific bounty at `/bounties/[id]`, review the clips, and either approve or reject them.
Clip creators receive feedback on their submissions, and content creators manage the approval process.

![IMG_1882](https://github.com/user-attachments/assets/ecbfbce5-35ef-46c3-a583-a1c35fd5ee45)
![IMG_1884_(copy)](https://github.com/user-attachments/assets/40f19e11-6d00-46d0-a5ea-bcfed4481001)
![IMG_1885](https://github.com/user-attachments/assets/745a1697-8c85-4835-8507-f8631ebbb38a)
