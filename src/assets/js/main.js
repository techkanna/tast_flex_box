const funNum = (target, duration) => {
  let targetEla = document.querySelector(target);
  let targetPosition = parseInt(targetEla.dataset.count);
  // console.log('targetPosition : ' + targetPosition);

  let startPosition = parseInt(targetEla.textContent);
  // console.log('startPosition : ' + startPosition);
  let distance = targetPosition - startPosition;
  // console.log('distance : ' + distance);
  let startTime = null;

  const animation = currentTime => {
    // console.log('startTime : ' + startTime);
    // console.log('currentTime : ' + currentTime);

    if (startTime === null) startTime = currentTime;
    // console.log('startTime : ' + startTime);
    // console.log('currentTime : ' + currentTime);
    let timeElapsed = currentTime - startTime;
    // console.log('timeElapsed : ' + timeElapsed);
    let run = ease(timeElapsed, startPosition, distance, duration);

    // window.scrollTo(0, run);
    // console.log('run : ' + run);
    targetEla.textContent = Math.floor(run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  };
  requestAnimationFrame(animation);
};

const numArr = ['.numOne', '.numTwo', '.numThree', '.numThree', '.numfour'];

numArr.forEach(num => {
  window.addEventListener('load', funNum(num, 2000));
});
