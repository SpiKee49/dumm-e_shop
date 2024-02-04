import Button from './Button';

function LoginButtons() {
  return (
    <div className="flex justify-end items-center gap-10 ml-auto">
      <Button value="Login" />
      <Button value="Register" primary />
    </div>
  );
}

export default LoginButtons;
