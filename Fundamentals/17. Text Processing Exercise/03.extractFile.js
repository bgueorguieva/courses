function extract(filePath) {
    let fileNameIndexStart = filePath.lastIndexOf("\\") + 1; // namirame indexa na nacaloto na imeto na faila
    let fileExtentionStart = filePath.lastIndexOf(".") + 1;
    let fileNameIndexEnd = fileExtentionStart - 1;

    let fileName = filePath.substring(fileNameIndexStart, fileNameIndexEnd); // ne vklyuchva poslendiq index, <, a ne =
    let fileExtention = filePath.substring(fileExtentionStart);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}
extract('C:\\Internal\\training-internal\\Template.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');