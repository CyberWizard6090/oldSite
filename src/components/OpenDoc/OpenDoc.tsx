import React from 'react'

import { ReactComponent as DownloadIcon } from "./../../asset/SVG-ICONS/download-svgrepo-com.svg"
import { ReactComponent as Excel } from "./../../asset/SVG-DOCS-ICONS/excel-document-svgrepo-com.svg"
import { ReactComponent as Powerpoint } from "./../../asset/SVG-DOCS-ICONS/ppt-document-svgrepo-com.svg"
import { ReactComponent as Word } from "./../../asset/SVG-DOCS-ICONS/word-document-svgrepo-com.svg"
import { ReactComponent as PDF } from "./../../asset/SVG-DOCS-ICONS/pdf-document-svgrepo-com.svg"
import { ReactComponent as FileUnknown } from "./../../asset/SVG-DOCS-ICONS/unknown-document-svgrepo-com.svg"
import { ReactComponent as Xml } from "./../../asset/SVG-DOCS-ICONS/xml-document-svgrepo-com.svg"
import { ReactComponent as Zip } from "./../../asset/SVG-DOCS-ICONS/zip-document-svgrepo-com.svg"
import { ReactComponent as Video_File } from "./../../asset/SVG-DOCS-ICONS/video-document-svgrepo-com.svg"
import { ReactComponent as Music_File } from "./../../asset/SVG-DOCS-ICONS/audio-document-svgrepo-com.svg"
import { ReactComponent as Txt } from "./../../asset/SVG-DOCS-ICONS/txt-document-svgrepo-com.svg";

import './../../css/OpenDoc.css'
type Props = {
    NameDoc: any,
    Doc: any

};

const word: string[] = ["doc", "docx", "docm", "dotx", "dotm", "rtf"];
const excel: string[] = ["xls", "xlt", "xlm", "xlsx", "xlsm", "xltx", "xltm", "xlsb", "xla", "xlam", "xll", "xlw"];
const powerpoint: string[] = ["ppt", "ppt", "pot", "pps", "ppa", "ppam", "pptx ", "pptm", "potx", "potm", "ppam", "ppsx", "ppsm", "sldx", "sldm", "pa"];
const zip: string[] = ["zip", "rar" ,"7z" ,"gzip"];
const Fvideo: string[] = ["mp4","ogv","webm"];
const Fmusic:  string[] = ["mp3","ogg","wav"];

const OpenDoc = ({ NameDoc, Doc }: Props) => {
    const FileType: any = Doc.split('.').pop();

    const LogoView = () => {
        if (word.includes(FileType)) {
            return <Word />
        }
        else if (excel.includes(FileType)) {
            return <Excel />
        }
        else if (powerpoint.includes(FileType)) {
            return <Powerpoint />
        }
        else if (zip.includes(FileType)) {
            return <Zip />
        }
        else if (Fvideo.includes(FileType)) {
            return <Music_File />
        }
        else if (Fmusic.includes(FileType)) {
            return <Video_File />
        }
        else if (FileType === "pdf") {
            return <PDF />
        }
        else if (FileType === "xml") {
            return <Xml/>
        }
        else if (FileType === "txt") {
            return <Txt />
        }
        else {
            return <FileUnknown />
        }
      
    }

    const Btn_read = () => {
        if (FileType === "pdf") {
            return (
                <div className="wrap_btn_read">
                    <div className="wrap_name_read">
                        <div className="name_read">
                            Читать
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <></>
        }

    }
    return (
        <div className='doc_item'>
            <div className="logo__doc_wrap">
                <div className="logo__doc">
                    <LogoView />
                </div>
            </div>

            <div className="wrap_text_name">
                <div className="text_name">
                    {NameDoc}
                </div>
            </div>

            <div className="wrap">
                <Btn_read />
            </div>
            <a href={window.location.origin + "/File/" + Doc} download={NameDoc + "." + FileType}>
                <div className="wrap__btn_download">
                    <div className="wrap_icon_download">
                        <div className="icon_download">
                            <DownloadIcon />
                        </div>
                    </div>
                    <div className="wrap__name__download">
                        <div className="name__download">Скачать</div>
                    </div>

                </div>
            </a>
        </div>
    )
}

export default OpenDoc