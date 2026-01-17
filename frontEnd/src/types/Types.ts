import { type ReactNode } from "react";

export type FormField = {
    userName: string ,
    password: string
}

export type queryDetails = {
    "Queries Asked": number,
    "Queries Answered": number;
}

export type RNChild = {
    children : ReactNode;
}