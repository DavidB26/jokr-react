import ChevronDown from "./chevron-down"
import ChevronUp from "./chevron-up"
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
    case 'chevron-down':{
      return <ChevronDown {...props} />
    }
    case 'chevron-up':{
      return <ChevronUp {...props} />
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
}

export default Index