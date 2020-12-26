import * as React from 'react'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {Cell} from "./Cell";
import { Idx } from "../cfg";

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.theme}, 1fr);
`

function Field(){
    const field: Idx[][] = useSelector((state: RootState) => state.field)
    return(
        <FieldContainer theme={Math.floor(field.length)}>
            {
                field!.map((el) => {
                    return [...el].map((el, idx) => {
                        return <Cell key={idx}>{el}</Cell>
                    })
                })
            }
        </FieldContainer>
    )
}
export default Field