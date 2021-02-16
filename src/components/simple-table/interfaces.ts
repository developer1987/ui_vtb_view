export interface IProps {
  caption: string
  headerElements: any[]
  data: {
    content: any[]
    totalElements: number
  };
  actions: {
    href: string
    caption: string
    type: string
    onClick?: any
    icon?: any
    svg?: string
  }[]
  dataIsLoading: boolean
}
