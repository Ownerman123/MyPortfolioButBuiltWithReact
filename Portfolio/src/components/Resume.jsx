import { useState } from 'react';
import {pdfjs, Document, Page} from 'react-pdf'
import pdf from '/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

const Resume = () => {

    const [numPages, setNumPages] = useState();
    

    // html to be loaded to dom
//     return (
//         <>
//         <p>wow a resume!</p>
//         <Document file={'./Resume7-29-24.pdf'} />
//         </>
//     );

// };


function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
}

return (
    <div>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className='resume'>
      {Array.apply(null, Array(numPages))
          .map((_, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="pdf-page"
              />
            );
          })}
      </Document>
      <a href="./resume.pdf" download='charlesShumway.pdf' className='boxedtext downloadbtn'>Download</a>
    </div>
  );
}

export default Resume;