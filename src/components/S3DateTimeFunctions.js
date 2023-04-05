export const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export const getCurrentTime = () => {
    const dateObj = new Date();
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}-${minutes}-${seconds}`;
    return formattedTime;
}

export const getS3FileName = (filename) => {
    return filename + '_' + getCurrentDate() + '_' + getCurrentTime() + '.jpg';
}