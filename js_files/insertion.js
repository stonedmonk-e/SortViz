async function insertion() {
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green'; // first bar turns green
    for (let i = 1; i < ele.length; i++) {
        // console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;

        ele[i].style.background = 'blue'; // selected bar

        await waitforme(delay);

        while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
            // console.log('In while loop');

            ele[j].style.background = 'blue';
            // ele[j + 1].style.height = ele[j].style.height;
            // or swapping
            swap(ele[j], ele[j + 1]);
            j--;

            await waitforme(delay);

            for (let k = i; k >= 0; k--) {
                ele[k].style.background = 'green'; // sorted
            }
        }
        ele[j + 1].style.height = key; // update the max bar

        ele[i].style.background = 'green'; // last bar
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});