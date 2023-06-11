import Facebook from "./facebook"
import Instagram from "./instagram"
import Linkedin from "./linkedin"

function Index({name,...props}) {
  switch(name){
    case 'facebook': {
      return <Facebook {...props} />
    }
    case 'instagram': {
      return <Instagram {...props} />
    }
    case 'linked-in':{
      return <Linkedin {...props} />
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'var(--grey)'
}

export default Index