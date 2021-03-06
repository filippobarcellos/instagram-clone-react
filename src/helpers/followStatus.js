const checkFollowStatus = ({ user, userLogged }) => {
  const followersArr = user.followedBy.map((u) => u.id);
  return followersArr.includes(userLogged.id);
};

export default checkFollowStatus;
