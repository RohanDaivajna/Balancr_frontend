import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

// uploadImage uploads an image file to the server using a POST request
const uploadImage = async (imageFile) => {
    // Create a FormData object and append the image file
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        // Send POST request to upload the image
        const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // Return the response data from the server
        return response.data;
    } catch (error) {
        // Log and rethrow any errors
        console.error('Error uploading the image:', error);
        throw error;
    }
};

export default uploadImage;