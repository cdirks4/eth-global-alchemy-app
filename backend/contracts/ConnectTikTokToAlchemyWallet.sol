// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TikTokLinker {
    mapping(address => string) public walletToTikTok;
    mapping(string => bool) public linkedTikTokIds; // To ensure a TikTok ID is linked only once

    event TikTokLinked(address indexed user, string tikTokId);

    function linkTikTokAccount(string memory tikTokId) public {
        require(
            bytes(walletToTikTok[msg.sender]).length == 0,
            "Wallet already linked"
        );
        require(!linkedTikTokIds[tikTokId], "TikTok ID already linked");

        walletToTikTok[msg.sender] = tikTokId;
        linkedTikTokIds[tikTokId] = true;

        emit TikTokLinked(msg.sender, tikTokId);
    }

    function getLinkedTikTokAccount(
        address user
    ) public view returns (string memory) {
        return walletToTikTok[user];
    }
}
