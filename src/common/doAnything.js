import useFetch from "./useFetch";

export default function useDoAnything() {
    const endPoint = 'https://www.boredapi.com/api/activity';
    const result = useFetch(endPoint);

    return result;
}