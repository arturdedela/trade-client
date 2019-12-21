import { provide } from "utils/IoC";
import { IReactComponent } from "mobx-react";
import { observable } from "mobx";
import { Component, ComponentType } from "react";
import bind from "shared/decorators/bind";

type GetComponentProps<T> = T extends ComponentType<infer P> | Component<infer P> ? P : never

@provide.singleton()
export class ModalStore {
  @observable openedModal?: any;
  @observable props?: object;

  @bind
  public openModal<T extends IReactComponent>(modal: T, props: GetComponentProps<T>) {
    this.openedModal = modal;
    this.props = props;
  }

  @bind
  public closeModal() {
    this.openedModal = undefined;
    this.props = undefined;
  }
}
