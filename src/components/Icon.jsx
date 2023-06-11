import Icont from './icon/index'

function Icon({nameIcon}) {
  return (
    <div className="bg-grey-jokr p-1.5 rounded-full inline-flex">
      <Icont name={nameIcon} />
    </div>
  );
}

export default Icon
