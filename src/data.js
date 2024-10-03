export const API_KEY = "AIzaSyCo5eokF1ZFPGI0QMN2QlDMyazXlk-y-b4"

export const value_converter = (num) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num;
}