import React, { FormEvent, useState } from "react";
import { AuthStyled, AuthTitle, AuthWrapper, FormStyled } from "./style";
import Input from "uikit/Input";
import Button from "uikit/Button";
import { useStore } from "utils/IoC";
import { AppStore } from "core/App/AppStore";
import { observer } from "mobx-react";

function Auth() {
  const appStore = useStore(AppStore);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await appStore.login(email, password);
  }

  return (
    <AuthStyled>
      <AuthWrapper>
        <AuthTitle>Личный кабинет</AuthTitle>
        <FormStyled onSubmit={handleSubmit}>
          <Input label="E-mail" onChange={setEmail} type="email" />
          <Input label="Пароль" onChange={setPassword} type="password" />
          <Button type="submit">Войти</Button>
        </FormStyled>
      </AuthWrapper>
    </AuthStyled>
  )
}

export default observer(Auth);
