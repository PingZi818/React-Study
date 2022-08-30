import React from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useDebounce, useDocumentTitle } from "../../utils"
import styled from "@emotion/styled"
import { Row } from "antd"
import { useProjects } from "utils/project"
import { useUsers } from "utils/user"
import { useProjectModal, useProjectsSearchParams } from "./util"
import { ButtonNoPadding, ErrorBox } from "components/lib"
// import {Helmet} from "react-helmet"
export const ProjectListScreen = () => {
    useDocumentTitle("项目列表", false);
    const [param, setParam] = useProjectsSearchParams()
    const { open } = useProjectModal()
    const {isLoading, error, data: list} = useProjects(useDebounce(param, 200))
    const { data: users} = useUsers()
    return (<Container>
        <Row justify={'space-between'}>
          <h1>项目列表</h1>
          <ButtonNoPadding type={'link'} onClick={() => open()}>创建项目</ButtonNoPadding>
        </Row>
        {/* <Helmet><title>请登录或注册</title></Helmet> */}
        <SearchPanel param ={param} setParam = {setParam} users={users || []}/>
        <ErrorBox error={error}/>
        <List 
        loading={isLoading} 
        dataSource={list || []} 
        users={users || []}/>
    </Container>)
}

const Container = styled.div`
padding: 3.2rem
`
ProjectListScreen.whyDidYouRender = false