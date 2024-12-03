import { ReactNode } from 'react';


/**
 * 错误类型
 */
export declare const ChatErrorType: {
    readonly InvalidAccessCode: "InvalidAccessCode";
    readonly OpenAIBizError: "OpenAIBizError";
    readonly NoAPIKey: "NoAPIKey";
    readonly BadRequest: 400;
    readonly Unauthorized: 401;
    readonly Forbidden: 403;
    readonly ContentNotFound: 404;
    readonly MethodNotAllowed: 405;
    readonly TooManyRequests: 429;
    readonly InternalServerError: 500;
    readonly BadGateway: 502;
    readonly ServiceUnavailable: 503;
    readonly GatewayTimeout: 504;
};

/**
 * 错误类型
 */
export type ErrorType = (typeof ChatErrorType)[keyof typeof ChatErrorType];

/**
 * 角色类型
 */
export type LLMRoleType = 'user' | 'system' | 'assistant' | 'function';

/**
 * 聊天消息错误对象
 */
export interface ChatMessageError {
    body?: any;
    message: string;
    type: ErrorType;
}

/**
 * OpenAI 函数调用对象
 */
export interface OpenAIFunctionCall {
    arguments?: string;
    name: string;
}

/**
 * LangChain 参数对象
 */
export interface LangChainParams {
  llm: {
    model: string;
    /**
     *  生成文本的随机度量，用于控制文本的创造性和多样性
     * @default 0.6
     */
    temperature: number;
    /**
     *  控制生成文本中最高概率的单个令牌
     */
    top_p?: number;
    /**
     *  控制生成文本中的惩罚系数，用于减少重复性
     */
    frequency_penalty?: number;
    /**
     *  控制生成文本中的惩罚系数，用于减少主题的变化
     */
    presence_penalty?: number;
    /**
     *  生成文本的最大长度
     */
    max_tokens?: number;
  };

  /**
   *  聊天信息列表
   */
  prompts: {
    createAt: number;
    id: string;
    meta: {
        /**
         * 角色头像
         * @description 可选参数，如果不传则使用默认头像
         */
        avatar?: string | ReactNode;
        /**
         *  背景色
         * @description 可选参数，如果不传则使用默认背景色
         */
        backgroundColor?: string;
        description?: string;
        tags?: string[];
        /**
         * 名称
         * @description 可选参数，如果不传则使用默认名称
         */
        title?: string;
    };
    updateAt: number;
        /**
     * @title 内容
     * @description 消息内容
     */
        content: string;
        error?: ChatMessageError;
        extra?: any;
        /**
         * replace with plugin
         * @deprecated
         */
        function_call?: OpenAIFunctionCall;
        name?: string;
        parentId?: string;
        plugin?: any;
        quotaId?: string;
        /**
         * 角色
         * @description 消息发送者的角色
         */
        role: LLMRoleType;
        /**
         * 保存到主题的消息
         */
        topicId?: string;
  }[];
  vars: Record<string, string>;
}
