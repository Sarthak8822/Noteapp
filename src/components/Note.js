import {MdDeleteForever} from 'react-icons/md';
function Note() {
    return(
     <div className="notes">
         <footer className="note-footer">
             <span>date</span>
             <MdDeleteForever className='delete-icon' size='1em'/>
         </footer>
     </div>
    )
  }
  export default Note;