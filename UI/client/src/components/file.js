import React from 'react';
import './file.css'
import Dropzone from 'react-dropzone-uploader'

const File = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: '/Users/Piero/Desktop/Test/' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      multiple="false"
      onSubmit={handleSubmit}
      accept="audio/*"
    />
  )
}

export default File
