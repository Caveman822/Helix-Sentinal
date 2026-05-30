import type { Rule } from 'eslint';

const maxFileLinesRule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow files exceeding a maximum number of lines',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          max: {
            type: 'integer',
            minimum: 1,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      maxFileLines:
        'File has too many lines ({{lineCount}}). Maximum allowed is {{max}}.',
    },
  },
  create(context: Rule.RuleContext): Rule.RuleListener {
    const options = context.options[0] || {};
    const maxLines: number = options.max ?? 180;

    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const lines = sourceCode.lines;
        const lineCount = lines.length;

        if (lineCount > maxLines) {
          context.report({
            node,
            messageId: 'maxFileLines',
            data: {
              lineCount: String(lineCount),
              max: String(maxLines),
            },
          });
        }
      },
    };
  },
};

export default maxFileLinesRule;
