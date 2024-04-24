import React from "react";

const RenderNames = ({ following, followers }) => {
  // Convert following and followers to strings
  const followingString = following ? following.toString() : "";
  const followersString = followers ? followers.toString() : "";

  // Regular expression to match <a> elements
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/g;

  // Extract inner text of <a> elements from following and followers
  const followingLinks = followingString.match(linkRegex);
  const followersLinks = followersString.match(linkRegex);
  
  // Extract link texts from following and followers
  const followingLinkTexts = followingLinks ? followingLinks.map(link => link.replace(linkRegex, '$2')) : [];
  const followersLinkTexts = followersLinks ? followersLinks.map(link => link.replace(linkRegex, '$2')) : [];
  
  // Filter out link texts from following that appear in followers
  const uniqueFollowingLinkTexts = followingLinkTexts.filter(text => !followersLinkTexts.includes(text));

  return (
    <div style={containerStyle}>
      {uniqueFollowingLinkTexts.map((linkText, index) => (
        <p key={index} style={blockStyle}>{linkText}</p>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Center the content horizontally
};

const blockStyle = {
  flex: '0 0 calc(25% - 10px)', // Adjusted flex basis considering margin
  boxSizing: 'border-box',
  padding: '10px',
  border: '1px solid #ccc',
  margin: '5px',
};

export default RenderNames;