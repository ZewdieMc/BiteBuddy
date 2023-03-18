const commentCounter = () => {
  const commentItems = document.querySelectorAll('.comments-container p');
  return commentItems.length;
};

export default commentCounter;
