import { Oval } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <Oval
  height={100}
  width={100}
  color="blue"
  wrapperStyle={{position: 'fixed',  top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="white"
  strokeWidth={2}
  strokeWidthSecondary={2}
/>
    )
}