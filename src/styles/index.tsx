import styled from "styled-components";

export const Wrapper = styled.div`
  width: 280px;
  height: 650px;
  padding: 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Show = styled.div`
  width: 85%;
  height: auto;
  padding: 5px 8px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
`;

export const Month = styled.table`
  width: 80%;
  margin: 10px;
  align-self: center;
  text-align: center;

  thead tr > th {
    color: #aaa;
    font-weight: 100;
    padding: 15px 3px;
    column-span: 1;
  }

  tbody tr > td {
    color: #333;
    padding: 6px;
    cursor: pointer;
    column-span: 1;

    &.today {
      color: #fff;
      background-color: #f34567;
      font-weight: 800;
      border-radius: 50%;
    }

    &.inactive {
      color: #bbb;
      opacity: 0.6;
      pointer-events: none;
    }

    /* This should be handled properly */
    &.inactive.today {
      background-color: white;
    }

    &:hover {
      background-color: #d6e6ff;
      border-radius: 2px;
      color: #333;
    }

    &:active {
      color: white;
      background-color: #6ec2fa;
      font-weight: 800px;
    }
  }
`;

export const Subtitle = styled.div`
  text-align: left;
`;

export const IconButton = styled.button`
  border: none;
  color: #333;
  padding: 2px;
  margin: 1px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
    border-radius: 15%;
  }
`;

export const Divider = styled.hr`
  border: 1px solid #eee;
  width: 100%;
`;

export const SwitchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 5px 0;

  &:hover {
    background-color: #eee;
  }
`;

export const Label = styled.label`
  color: #333;
  font-size: 15px;
  font-weight: 400;
`;

export const Switch = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 35px;
  height: 20px;
  -webkit-appearance: none;
  background-color: #c6c6c6;
  outline: none;
  border-radius: 10px;
  transition: 0.5s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:checked {
    background-color: #4287f5;
  }

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background-color: #fff;
    transition: 0.5s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  &:checked::before {
    left: 20px;
  }
`;

export const DateDisplayer = styled.input`
  border: none;
  width: 100%;
  outline: none;
  padding: 2px;
  background-color: #eee;
  display: inline-block;

  &:first-child::after {
    content: "|";
    float: right;
    display: block;
    margin-left: 10px;
    font-weight: normal !important;
    color: #555;
    background-color: #fff;
    border: none;
  }
`;
