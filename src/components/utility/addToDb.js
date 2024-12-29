const getReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if (storeListStr) {
        const storeList = JSON.parse(storeListStr);
        return storeList;
    } else {
        return [];
    }
};

const addhandleMarkRead = (id) => {
    const storeList = getReadList();
    if (storeList.includes(id)) {
        console.log(id, 'allready exist');

    } else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr)
    }
};

export { addhandleMarkRead, getReadList};