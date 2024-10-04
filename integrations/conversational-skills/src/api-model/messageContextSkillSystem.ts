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

/**
 * System context data used by the skill.
 */
export interface MessageContextSkillSystem extends Record<string, any> {
  [key: string]: any;
  state: string;
}
