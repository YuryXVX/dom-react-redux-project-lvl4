import {createSelector} from "@reduxjs/toolkit";


const channelsEntities = ({channelReducers: {entities}}) => entities;

export const channelSelector = ({channelReducers: {entities}}) => Object.values(entities);
export const currentChannelIdSelector = ({channelReducers: {currentChannelId}}) => currentChannelId;

export const getCurrentChannel = createSelector(
  channelsEntities,
  currentChannelIdSelector,
  (messages, currentChannelId) => messages[currentChannelId]
);