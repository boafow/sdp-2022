/* RETURNS DATE AS YYYY-MM-DD */
export const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

/* RETURNS TIME AS HH-MM-SS IN 24-HOUR FORMAT */
export const getCurrentTime = () => {
    const dateObj = new Date();
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const seconds = dateObj.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}-${minutes}-${seconds}`;
    return formattedTime;
}

/* CONSTRUCTS S3 FILE NAME: FILENAME + DATE + TIME + .jpg */
export const getS3FileName = (filename) => {
    return filename + '_' + getCurrentDate() + '_' + getCurrentTime() + '.jpg';
}

/* TAKES IN 2023-04-10 AND RETURNS MARCH 4th, 2023 */
export const getHumanReadableDate = (tmpDate) => {
    const date = new Date(tmpDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const readableDate = date.toLocaleDateString('en-US', options);
    return readableDate;
}

/* TAKES IN 13-05-01 AND RETURNS 1:05 PM; DROPS SECONDS */
export const getHumanReadableTime = (tmpTime) => {
    const hour = parseInt(tmpTime.slice(0, 2));
    const minute = tmpTime.slice(3, 5);
    const second = tmpTime.slice(6, 8);
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const readableTime = `${hour12}:${minute} ${period}`; 
    return readableTime;
}