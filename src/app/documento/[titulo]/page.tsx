"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/Footer';
import jQuery from "jquery";
if(typeof window === )

export default function Documento() {
  const router = useRouter();
  const pathname = usePathname();
  
  console.log(router);
  return (
    <>
      <Container fluid className='vh-100'>
        <Row>
          <Col>
            {pathname}
          </Col>
          <Col xs={12} md={8}>
            <div id="container"></div>
          </Col>
        </Row>
        <Footer/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"></script>
        <script src="/js/flipbook.min.js"></script>
        <script type="text/javascript">
        jQuery(document).ready(function () {
                (jQuery("#container") as any).flipBook({
                    pdfUrl:"https://s3.amazonaws.com/cec.imcyc.com/4+A+Cement+Producers+View+of+Process+Control+and+Automation.pdf",
                    backgroundColor: 'transparent',
                    viewMode: '3d',
                    singlePageMode: true,
                    pages:[
                        {title:"Cover"},
                        {title:""},
                        {title:"Page 3"},
                        {title:""},
                        {title:""},
                        {title:""},
                        {title:""},
                        {title:"End"},
                    ],
                    btnToc: {enabled:false},
                    btnSelect: {enabled:false},
                    btnDownloadPages : {enabled:false},
                    btnDownloadPdf : {enabled:false},
                    btnPrint : {enabled:false},
                    btnShare : {enabled:false},
                    btnZoomIn: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    btnZoomOut: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    btnSound: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    btnThumbs: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    btnBookmark: {enabled:false},
                    btnExpand: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    btnAutoplay: { vAlign: 'top', hAlign: 'right', background: '#ed1d25' },
                    currentPage: { hAlign: 'center' },
                    btnBackground: 'rgb(16 74 159);'
                })
            })
        </script>
      </Container>
    </>
  )
}
