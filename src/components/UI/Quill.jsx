import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// function Quill() {
//     const { quill, quillRef } = useQuill();
//   return (
//     <div>
//       <div style={{ width: 750, height: 300 }}>
//         <div ref={quillRef} />
//       </div>
//     </div>
//   );
// }

// export default Quill

function Quill() {
  const quillRef = React.useRef(null);

  React.useEffect(() => {
    const quillContainer = quillRef.current.getEditor().container;
    const toolbar = quillContainer.querySelector(".ql-toolbar");
    quillContainer.removeChild(toolbar);
  }, []);

  return <ReactQuill ref={quillRef} />;
}

export default Quill;
