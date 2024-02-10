import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
  width: "100%",
  height : "15rem",
  borderWidth: "0.1rem",
  marginBottom: "1rem",
  borderRadius: "0.5rem",
  borderColor: "#add8e6", // Gray color
  backgroundColor: "#FFFFFF", // White color
  color: "#a9afb6",
  transition: "border .3s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function DropZonePost(props) {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Here you can upload the files to your MongoDB database
    console.log("Files uploaded:", acceptedFiles);
    setFiles(acceptedFiles);
    resizeAndSetImageSrc(acceptedFiles[0]);
    // You may want to use a backend service or API to handle the upload process
  }, []);

  const resizeAndSetImageSrc = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        // Calculate new dimensions while maintaining aspect ratio
        const scaleFactor = Math.min(250 / img.width, 250 / img.height);
        const newWidth = img.width * scaleFactor;
        const newHeight = img.height * scaleFactor;
  
        canvas.width = 250;
        canvas.height = 250;
        
        // Center the image horizontally and vertically inside the canvas
        const x = (canvas.width - newWidth) / 2;
        const y = (canvas.height - newHeight) / 2;
  
        ctx.drawImage(img, x, y, newWidth, newHeight);
        setImageSrc(canvas.toDataURL("image/jpeg"));
      };
    };
  };
  
  

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  useEffect(() => {
    // Clean up function to revoke the Object URLs when component unmounts
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section>
      {imageSrc ? (
        <img src={imageSrc} alt="Uploaded" />
      ) : (
        <div className="flex justify-center items-center" {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <div>Browse or drag-drop your photo.</div>
        </div>
      )}
    </section>
  );
}

export default DropZonePost;
