import './App.css';
import React, {  useEffect, useRef } from "react";

export default function App() {
  /* const [text, setText] = useState(''); */

  return (
    <div className="App">
      <EnoikioBox />
    </div>
  );
}


function EnoikioBox() {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;

      const boxPosition = boxRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 1.3;

      if (boxPosition.top < triggerPoint) {
        boxRef.current.classList.add('animateready');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={boxRef} className="enoikio-box kbox">
      <h4>Προνόμια</h4>
      <div className="sbox-grid">
        <div className="insbox">
            <h3><span>Πρόγραμμα <span style={{fontWeight: 100}}>Sofianos</span><span style={{fontFamily: 'MyFontBold', fontSize: '23px', color: '#21bea5'}}>Plus</span><strong>+</strong></span></h3>
            <p>Λάβετε κουπόνια για κάθε μήνα χρήσης, για αγορές στη τεράστια γκάμα προϊόντων μας.</p>
            <span className="containerhidden">
                <p>Μετά τον 2ο μήνα χρήσης μπορείτε να λαμβάνετε κουπόνι έκπτωσης για άλλες αγορές στο καταστημά μας. Κάθε επόμενο μήνα δικαιούστε και από ένα.</p>
                <p>Το μόνο που έχετε να κάνετε είναι να επικοινωνήσετε μαζί μας και θα σας το στείλουμε, εάν έχετε ενοίκιο πάνω από 2 μήνες.</p>
                <p>Επίσης λάβετε ανά περιόδους ειδικές προσφορές, μόνο για πελάτες Sofianos Plus, σε διάφορα προϊόντα!</p>
            </span>
        </div>
        <div className="insbox">
            <h3>Μεταφορά & Εγκατάσταση</h3>
            <p>Στη πόρτα σας την ίδια ημέρα!</p>
            <span className="containerhidden"><p>Ερχόμαστε εμείς σε εσάς κατόπιν ραντεβού και εγκαθιστούμε τον εξοπλισμό ενοικίου στο χώρο της επιλογής σας, δείχνοντας σας πως να το χρησιμοποιείτε, έτσι ώστε να μη έχετε καμία απολύτως έγνοια!</p>
                <p>Όπου και αν είστε εντός Αττικής, εμείς θα έρθουμε στη πόρτα σας την ίδια ή την επόμενη μέρα ανάλογα με την ώρα που ολοκληρώσετε την παραγγελία σας!</p>
            </span>
        </div>
        <div className="insbox">
            <h3>Έκπτωση Αγοράς</h3>
            <p>Δοκιμάστε το προϊόν και κερδίστε αγοραζοντάς το.</p>
            <span className="containerhidden">
                <p>Αν θελήσετε κάποια στιγμή να αγοράσετε τον εξοπλισμό ενοικίου που έχετε, κερδίστε 1 μήνα έκπτωση από την αρχική τιμή αγοράς του προϊόντος!</p>
            </span>
        </div> 
      </div>
      <div className="outsbox">
        <div className="f1"><svg className="f1img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.0"><title>Πρόγραμμα Sofianos Plus</title><path fill="#a4ebee" d="M75 0a75 75 0 1 0 0 150A75 75 0 0 0 75 0Zm0 6.3a68.7 68.7 0 1 1 0 137.4A68.7 68.7 0 0 1 75 6.3Zm-14.8 54h-25a4 4 0 0 0-4 4v21.5a4 4 0 0 0 4 4h25v25a4 4 0 0 0 4 4h21.6a4 4 0 0 0 4-4v-25h25a4 4 0 0 0 4-4V64.2a4 4 0 0 0-4-4h-25v-25a4 4 0 0 0-4-4H64.2a4 4 0 0 0-4 4Zm6.4-22.8h16.8V63a3.6 3.6 0 0 0 3.6 3.6h25.5v16.8H87a3.6 3.6 0 0 0-3.6 3.6v25.5H66.6V87a3.6 3.6 0 0 0-3.6-3.6H37.5V66.6H63a3.6 3.6 0 0 0 3.6-3.6Zm0 0" fill-rule="evenodd"/></svg></div>
        <div className="f2" style={{textAlign: 'center'}}>
          <svg className="f2img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 75" version="1.0"><defs><clipPath id="f2img"><title>Μεταφορά</title><path d="M0 0h113.3v64H0Zm0 0"/></clipPath></defs><g clip-path="url(#f2img)"><path d="M104.6 40.9c1.5 0 3 .9 4 2.4 1.2 2.1.8 4.7-1 5.7-1.7 1-4.1.1-5.4-2-1.2-2.1-.8-4.7 1-5.7.4-.2.9-.4 1.4-.4ZM69.1 14.7h8c1.9 0 2.7 0 3.8 1.8l8.9 15.4c1.2 2 .5 2.6-1.3 2.6H69c-1.5 0-2.1-.5-2.1-2.1V16.9c0-1.4.3-2.2 2.2-2.2ZM5.6 0C2.5 0 0 1.6 0 5.3v51.3c0 3.7 2.5 6.6 5.6 6.6h6a15.4 15.4 0 0 1 31 0H65a15.4 15.4 0 0 1 30.9 0h12.3c2.7 0 5-2.5 5-5.7v-13c0-2.2-.7-3.6-2.2-4.8l-10-7.4a15.4 15.4 0 0 1-3.8-4.4L86.7 9.6C81.2 0 74.5.1 67.5.1Zm0 0"/></g><path style={{fill: '#ffffff'}} d="M80.4 75a11.9 11.9 0 1 1 0-23.7 11.9 11.9 0 0 1 0 23.8Zm0-7.3a4.4 4.4 0 1 0 0-9 4.4 4.4 0 0 0 0 9ZM27 75a11.9 11.9 0 1 1 0-23.7 11.9 11.9 0 0 1 0 23.8Zm0-7.3a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 0"/></svg>
          <svg className="f25img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.5 177.7" version="1.0"><defs><clipPath id="f25img"><title>Εγκατάσταση στο σπίτι σας</title><path d="M0 18.5h187v158.9H0Zm0 0"/></clipPath></defs><g clip-path="url(#f25img)"><path d="M75 178.2V122h37.5v56.3h46.9v-75.1h28.1L93.7 18.5 0 103h28.1v75.1Zm0 0"/></g></svg>
        </div>
        <div className="f3" style={{textAlign: 'right'}}><svg className="f3img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 150" version="1.0"><defs><clipPath id="f3img-a"><title>Μοναδικές Εκπτώσεις με την ενοικίαση νοσοκομειακού εξοπλισμού</title><path d="M0 0h38v46.2H0Zm0 0"/></clipPath><clipPath id="f3img-b"><path d="M5 28h54.8v122H5Zm0 0"/></clipPath></defs><path fill={"#fff"} d="M-6-15H66V165H-6z"/><path fill="#fff" d="M-6-15H66V165H-6z"/><path fill="#fff" d="M-6-15H66V165H-6z"/><g clip-path="url(#f3img-a)"><path fill="#23d1b56b" d="M17.4.2c4 .6 7.6 2.7 10 6A86.6 86.6 0 0 1 37.7 29l-.3-.3a6.6 6.6 0 0 0-4.7-1.8v-.2a84 84 0 0 0-8.6-18A11.1 11.1 0 0 0 8.5 6.2 11.1 11.1 0 0 0 6 21.9a87 87 0 0 0 14.6 13.5l.4.3.7.5.7.5c2 1.4 3.7 2.5 5.2 3.3l.8.4.8.4c3 1.4 4.6 1.4 5.2 1 .3-.3.6-.9.7-1.7 1.5.8 2.5 2.2 2.8 3.9a5 5 0 0 1-1 1c-2.2 1.7-5.4 1.5-9.6-.5l-.8-.4-.8-.4c-1.9-1-4-2.4-6.4-4l-.6-.6-.5-.4H18c-6.7-5-13-11.3-15.3-14.4A15.2 15.2 0 0 1 6 3C9.3.6 13.4-.4 17.4.2"/></g><g clip-path="url(#f3img-b)"><path fill="#23d1b5ab" d="M25.7 44.9a7 7 0 1 0 9.2-6.7h-.5c-.5-.2-1-.3-1.7-.3a7 7 0 0 0-4.3 1.5c-1.5-.7-3.2-1.8-5.3-3.3l6.4-6.2a5 5 0 0 1 3.3-1.3h.5c1 0 2 .5 3 1.3l2.2 2.2.6.5.5.5 18.7 18a5 5 0 0 1 1.5 3.6V145a5 5 0 0 1-5 4.9H10.9a5 5 0 0 1-5-5V54.8A5 5 0 0 1 7.6 51l11.3-11c2.6 2 4.9 3.4 7 4.5v.3"/></g></svg></div>
      </div>
    </div>
  );
}
