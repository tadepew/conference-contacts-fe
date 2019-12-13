import React from "react";
import Popup from "reactjs-popup";
import QRCode from 'qrcode.react';

const contentStyle = {
  width: '80%',
  height: '50%'
}

const QrCodeGenerator = () => {
  
  return (
    <Popup 
      trigger={
        <button className="button focus:outline-none">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 0H2C0.89375 0 0 0.89375 0 2V21.25C0 21.525 0.225 21.75 0.5 21.75H21.25C21.525 21.75 21.75 21.525 21.75 21.25V0.5C21.75 0.225 21.525 0 21.25 0ZM17.75 17.75H4V4H17.75V17.75ZM9.125 13.125H12.625C12.9 13.125 13.125 12.9 13.125 12.625V9.125C13.125 8.85 12.9 8.625 12.625 8.625H9.125C8.85 8.625 8.625 8.85 8.625 9.125V12.625C8.625 12.9 8.85 13.125 9.125 13.125ZM21.25 26.25H0.5C0.225 26.25 0 26.475 0 26.75V46C0 47.1062 0.89375 48 2 48H21.25C21.525 48 21.75 47.775 21.75 47.5V26.75C21.75 26.475 21.525 26.25 21.25 26.25ZM17.75 44H4V30.25H17.75V44ZM9.125 39.375H12.625C12.9 39.375 13.125 39.15 13.125 38.875V35.375C13.125 35.1 12.9 34.875 12.625 34.875H9.125C8.85 34.875 8.625 35.1 8.625 35.375V38.875C8.625 39.15 8.85 39.375 9.125 39.375ZM46 0H26.75C26.475 0 26.25 0.225 26.25 0.5V21.25C26.25 21.525 26.475 21.75 26.75 21.75H47.5C47.775 21.75 48 21.525 48 21.25V2C48 0.89375 47.1062 0 46 0ZM44 17.75H30.25V4H44V17.75ZM35.375 13.125H38.875C39.15 13.125 39.375 12.9 39.375 12.625V9.125C39.375 8.85 39.15 8.625 38.875 8.625H35.375C35.1 8.625 34.875 8.85 34.875 9.125V12.625C34.875 12.9 35.1 13.125 35.375 13.125ZM47.5 26.25H44.5C44.225 26.25 44 26.475 44 26.75V35.125H39.125V26.75C39.125 26.475 38.9 26.25 38.625 26.25H26.75C26.475 26.25 26.25 26.475 26.25 26.75V47.5C26.25 47.775 26.475 48 26.75 48H29.75C30.025 48 30.25 47.775 30.25 47.5V32.25H35.125V38.625C35.125 38.9 35.35 39.125 35.625 39.125H47.5C47.775 39.125 48 38.9 48 38.625V26.75C48 26.475 47.775 26.25 47.5 26.25ZM38.625 44H35.625C35.35 44 35.125 44.225 35.125 44.5V47.5C35.125 47.775 35.35 48 35.625 48H38.625C38.9 48 39.125 47.775 39.125 47.5V44.5C39.125 44.225 38.9 44 38.625 44ZM47.5 44H44.5C44.225 44 44 44.225 44 44.5V47.5C44 47.775 44.225 48 44.5 48H47.5C47.775 48 48 47.775 48 47.5V44.5C48 44.225 47.775 44 47.5 44Z" fill="black"/>
          </svg>
        </button>
      } 
      modal
      contentStyle={contentStyle}
      >
        {close => (
          <div className=''>
            <div className='flex justify-end mr-4'>
              <button className="text-4xl focus:outline-none" onClick={close}>
                &times;
              </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-xl mb-16'>Your personal QR code</p>
                <QRCode includeMargin={false} level='Q' renderAs='svg' value={`http://staging.swaap.co/profile`} />
            </div>
          </div>
        )}
    </Popup>
  )
};

export default QrCodeGenerator;