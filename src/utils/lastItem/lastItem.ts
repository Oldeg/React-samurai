export const lastItem = (arr:{ id: number, message: string }[] , id: number) => {
    return id !== 0 && arr[arr.length-1]
};

