import React from 'react'
import keila_braden_resume from '../../assets/keila_braden_resume.pdf'

const CTA = () => {
  const openResumeInNewTab = () => {
    window.open(keila_braden_resume, '_blank');
  }

  return (
    <div className='cta'>
        <a className='btn' onClick={openResumeInNewTab}>View Resume</a>
        <a href="#contact" className= 'btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA 