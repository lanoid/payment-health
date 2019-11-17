export default (date: Date, separator?: string, order?: string) => {
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + (date.getDate())).slice(-2);
    let dateString = '';

    if (!separator) {
        separator = '-';
    }

    switch(order) {
        case 'DMY':
            dateString = `${day}${separator}${month}${separator}${date.getFullYear()}`;
        break;
        default:
            dateString = `${date.getFullYear()}${separator}${month}${separator}${day}`;
        break;
    }

    return dateString;
}