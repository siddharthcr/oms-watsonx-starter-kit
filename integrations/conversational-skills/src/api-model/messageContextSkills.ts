/**
 * Procode Endpoints for Conversational Skills
 * This document describes the following APIs that will be implemented by a watsonx Assistant client, and consumed by the watsonx Assistant team in order to enable the objectives set forth by the Conversational Skills Mission.
 *
 * OpenAPI spec version: 1.0.11
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MessageContextActionSkill } from './messageContextActionSkill';
import { MessageContextConversationalSkills } from './messageContextConversationalSkills';
import { MessageContextDialogSkill } from './messageContextDialogSkill';

/**
 * Context data specific to particular skills used by the assistant.
 */
export interface MessageContextSkills {
  'main skill'?: MessageContextDialogSkill;
  'actions skill'?: MessageContextActionSkill;
  'conversational skills'?: MessageContextConversationalSkills;
  /**
   * When a conversation is underway, and it hasn't yet finished, the Assistant uses this attribute to track which skill should start processing the next user message in the conversation. At appropriate milestones in a conversation, e.g., initial routing, digression, return from digression, the Assistant updates this attribute to indicate which skill should process the next user message.
   */
  active_skill?: MessageContextSkills.ActiveSkillEnum;
}
export namespace MessageContextSkills {
  export type ActiveSkillEnum = 'main skill' | 'actions skill' | 'conversational_skills';
  export const ActiveSkillEnum = {
    MainSkill: 'main skill' as ActiveSkillEnum,
    ActionsSkill: 'actions skill' as ActiveSkillEnum,
    ConversationalSkills: 'conversational_skills' as ActiveSkillEnum,
  };
}
