const noBtn = document.getElementById("btn-no");
const siBtn = document.getElementById("btn-si");

noBtn.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás segura?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si marrano!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Ni pedo',
                width: 400,
                padding: '3em',
                color: '#716add',
                background: '#fff url(https://sweetalert2.github.io/#examplesimages/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://i.pinimg.com/originals/e7/dc/e1/e7dce1620e2cae38976fc91152908ed3.jpg")
                  left top
                  no-repeat
                `
              })   
        }
    })
})

noBtn.addEventListener('mouseover', () => {
  const axisX = Math.round(Math.random() * 440) + "px";
  const axisY = Math.round(Math.random() * 310) + "px";
  noBtn.style.left = axisX;
  noBtn.style.top = axisY;
});


siBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Yo te amo más',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/#examplesimages/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("twenty-one.gif")
          left top
          no-repeat
        `
      })
});