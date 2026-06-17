import {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function DocxViewerInner({file}) {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDocument() {
      try {
        const {renderAsync} = await import('docx-preview');
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Could not load document (${response.status})`);
        }
        const blob = await response.blob();
        if (cancelled || !containerRef.current) {
          return;
        }
        containerRef.current.innerHTML = '';
        await renderAsync(blob, containerRef.current, null, {
          className: 'docx',
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
        });
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message);
        }
      }
    }

    loadDocument();

    return () => {
      cancelled = true;
    };
  }, [file]);

  if (error) {
    return <p>Unable to display this document. {error}</p>;
  }

  return <div ref={containerRef} className={styles.docxViewer} />;
}

export default function DocxViewer({file}) {
  return (
    <BrowserOnly fallback={<p>Loading document…</p>}>
      {() => <DocxViewerInner file={file} />}
    </BrowserOnly>
  );
}
