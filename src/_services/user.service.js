import {homeConfig, authHeader, handleResponse } from '../_helpers';

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${homeConfig.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${homeConfig.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}