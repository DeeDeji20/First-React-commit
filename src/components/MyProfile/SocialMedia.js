import React, { Component } from 'react'

export class SocialMedia extends Component {
    render() {
        return (
            <div style={socialIcons}>
            
             <i className=' icon fab fa-facebook' style={icon}></i>
             <i className='icon fab fa-twitter' style={icon}></i>
             <i className='icon fab fa-github' style={icon}></i>
             <i className='icon fab fa-medium' style={icon}></i>
            </div>
        )
    }
}
const socialIcons={
    display:'flex',
    flexDirection:'column',
    position:'absolute',
    top:'10%',
    padding:'20px'
}

const icon={
    padding:'12px',
    margin:'5px',
    border:'1px solid #6d76f7',
    borderRadius:'50%',
    cursor:'pointer'
}

export default SocialMedia
