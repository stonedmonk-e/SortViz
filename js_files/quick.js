
async function partitionIndex(ele, l, r) {
    console.log('In partitionIndex()');
    let i = l - 1;

    ele[r].style.background = 'red'; // color pivot element

    for (let j = l; j <= r - 1; j++) {
        console.log('In partitionIndex for j');

        ele[j].style.background = 'yellow'; // color current element

        await waitforme(delay);

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            console.log('In partitionIndex for j if');
            i++;

            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if (i != j)
                ele[j].style.background = 'orange';

            await waitforme(delay);
        }
        else {
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;

    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof (i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await waitforme(delay);

    // color
    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'green')
            ele[k].style.background = 'orange';
    }

    return i;
}

async function quickSort(ele, l, r) {
    console.log('In quickSort()', `l=${l} r=${r}`, typeof (l), typeof (r));

    if (l < r) {
        let pivot_index = await partitionIndex(ele, l, r);

        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green'; // sorted
            ele[l].style.background = 'green'; // sorted
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function () {
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});