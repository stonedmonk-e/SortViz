async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");

    for (let i = 0; i < ele.length - 1; i++) {
        // console.log('In ith loop');
        for (let j = 0; j < ele.length - i - 1; j++) {
            // console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j + 1].style.background = 'blue';

            if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
                // console.log('In if condition');
                await waitforme(delay); // to control speed of visualisation
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = 'orange';
            ele[j + 1].style.background = 'orange';
        }
        ele[ele.length - 1 - i].style.background = 'green'; // sorted bar
    }
    ele[0].style.background = 'green'; // first bar
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await bubble(); // to check if sorting process is complete

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
