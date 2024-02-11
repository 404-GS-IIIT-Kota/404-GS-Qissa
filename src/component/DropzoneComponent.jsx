import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
  width: "full",
  // height : "7rem",
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

function DropzoneComponent(props) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Here you can upload the files to your MongoDB database
    console.log("Files uploaded:", acceptedFiles);
    // You may want to use a backend service or API to handle the upload process
  }, []);

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
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Add a profile picture.</div>
      </div>
    </section>
  );
}

export default DropzoneComponent;
