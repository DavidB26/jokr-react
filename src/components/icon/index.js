import Facebook from "./facebook"

function Index({name,...props}) {
  switch(name){
    case 'facebook': {
      return Facebook {...props} />
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