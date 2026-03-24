export function DetailedActhor(item) {
    let container = document.querySelector(".top-container")
    container.innerHTML = `
    <div class="image-box">
    <img src ="https://image.tmdb.org/t/p/original${item.profile_path}">
    </div>
    <div class="info-block">
    <h4 class ="navigation">Home > Films > ${item.name}</h4>
    <h2 class="info-title">${item.name}</h2>

    <div class="info-list">
    <p>Information</p>
        <div class="info-row">
            <span class="info-label">Career:</span>
            <span class="info-value">${item.known_for_department}</span>
        </div>

        <div class="info-row">
            <span class="info-label">Birthday:</span>
            <span class="info-value">${item.birthday} (${getAge(item.birthday)})</span>
        </div>

        <div class="info-row">
            <span class="info-label">Place of birth:</span>
            <span class="info-value">${item.place_of_birth}</span>
        </div>

        <div class="info-row">
            <span class="info-label">Gender:</span>
            <span class="info-value">${genderDefine(item.gender)}</span>
        </div>
    </div>
</div>`
    return container
}
function genderDefine(num) {
    let gender
    if (num == 2) {
        gender = "male"
    } else {
        gender = "female"
    }
    return gender
}
function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const monthDiff = today.getMonth() - birth.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}