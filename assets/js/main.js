const calcCal = () => {
  const height = Number(document.querySelector("#height").value);
  const age = Number(document.querySelector("#age").value);
  const weight = Number(document.querySelector("#weight").value);
  const woman = document.querySelector("#woman").checked;
  const man = document.querySelector("#man").checked;
  const activities = document.querySelector("#activities").value;
  const outputallkc = document.querySelector(".outputallkc");
  const outputallkj = document.querySelector(".outputallkj");
  const outputgeneralkc = document.querySelector(".outputgeneralkc");
  const outputgeneralkj = document.querySelector(".outputgeneralkj");
  const formulaWoman = 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;
  const formulaMan = 66.47 + 13.7 * weight + 5 * height - 6.8 * age;
  const convertValueKcalToKj = 4.1875;
  if (woman) {
    outputgeneralkc.innerHTML = Math.round(formulaWoman);
    outputgeneralkj.innerHTML = Math.round(
      outputgeneralkc.innerHTML * convertValueKcalToKj
    );
  } else if (man) {
    outputgeneralkc.innerHTML = Math.round(formulaMan);
    outputgeneralkj.innerHTML = Math.round(
      outputgeneralkc.innerHTML * convertValueKcalToKj
    );
  }
  outputallkc.innerHTML = Math.round(outputgeneralkc.innerHTML * activities);
  outputallkj.innerHTML = Math.round(outputgeneralkj.innerHTML * activities);
};
